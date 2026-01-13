
import { v4 as uuidv4 } from 'uuid';

export interface Playlist {
    id: string;
    title: string;
    description: string;
    blogSlugs: string[];
    createdAt: string;
}

const STORAGE_KEY = "clarifyit_playlists";

export function getPlaylists(): Playlist[] {
    if (typeof window === "undefined") return [];
    const startData = localStorage.getItem(STORAGE_KEY);
    if (!startData) return [];
    try {
        return JSON.parse(startData);
    } catch (e) {
        console.error("Failed to parse playlists", e);
        return [];
    }
}

export function getPlaylist(id: string): Playlist | undefined {
    const playlists = getPlaylists();
    return playlists.find(p => p.id === id);
}

export function savePlaylist(playlist: Playlist): void {
    const playlists = getPlaylists();
    const index = playlists.findIndex(p => p.id === playlist.id);

    if (index >= 0) {
        playlists[index] = playlist;
    } else {
        playlists.push(playlist);
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(playlists));
    window.dispatchEvent(new Event("playlists-updated"));
}

export function createNewPlaylist(title: string, description: string = ""): Playlist {
    const newPlaylist: Playlist = {
        id: uuidv4(),
        title,
        description,
        blogSlugs: [],
        createdAt: new Date().toISOString()
    };
    savePlaylist(newPlaylist);
    return newPlaylist;
}

export function deletePlaylist(id: string): void {
    const playlists = getPlaylists().filter(p => p.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(playlists));
    window.dispatchEvent(new Event("playlists-updated"));
}

export function toggleBlogInPlaylist(playlistId: string, blogSlug: string): void {
    const playlist = getPlaylist(playlistId);
    if (!playlist) return;

    if (playlist.blogSlugs.includes(blogSlug)) {
        playlist.blogSlugs = playlist.blogSlugs.filter(s => s !== blogSlug);
    } else {
        playlist.blogSlugs.push(blogSlug);
    }
    savePlaylist(playlist);
}

// Sharing Logic (Stateless URL)
export function generateShareUrl(playlist: Playlist): string {
    if (typeof window === "undefined") return "";

    // Minimal data to share
    const data = {
        t: playlist.title,
        d: playlist.description,
        s: playlist.blogSlugs
    };

    const jsonString = JSON.stringify(data);
    const encoded = btoa(jsonString); // Base64 encode
    return `${window.location.origin}/playlists/shared?data=${encoded}`;
}

export function parseShareData(encodedData: string): Partial<Playlist> | null {
    try {
        const jsonString = atob(encodedData);
        const data = JSON.parse(jsonString);
        return {
            title: data.t,
            description: data.d,
            blogSlugs: data.s
        };
    } catch (e) {
        console.error("Failed to parse shared data", e);
        return null;
    }
}
