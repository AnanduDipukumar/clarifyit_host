import os

def search_files():
    data_dir = r"c:\Users\ANANDU DIPUKUMAR\Antigravity Projects\Clarifyit.in\src\lib\data"
    targets = ["More Than Meets the Eye", "Voltage (V)", "Voltage ( V"]
    
    for filename in os.listdir(data_dir):
        if filename.endswith(".ts"):
            path = os.path.join(data_dir, filename)
            try:
                with open(path, "r", encoding="utf-8") as f:
                    content = f.read()
                    for target in targets:
                        if target in content:
                            print(f"Found '{target}' in {filename}")
            except Exception as e:
                print(f"Error reading {filename}: {e}")

if __name__ == "__main__":
    search_files()
