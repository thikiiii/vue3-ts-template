import compressPlugin from 'vite-plugin-compression'

// 压缩
export const setupCompress = (viteEnv: ImportMetaEnv) => {
    const { VITE_BUILD_COMPRESS, VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE } = viteEnv
    if (VITE_BUILD_COMPRESS === 'none') return
    return compressPlugin({
        algorithm: VITE_BUILD_COMPRESS,
        deleteOriginFile: VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE
    })
}
