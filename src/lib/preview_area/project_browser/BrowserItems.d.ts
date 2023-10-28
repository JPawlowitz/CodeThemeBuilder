export interface DirectoryItem {
    name: string,
    sub_dirs: DirectoryItem[]
    files: FileItem[]
}

export interface FileItem {
    name: string,
}