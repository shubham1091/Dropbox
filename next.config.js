/** @type {import('next').NextConfig} */
const nextConfig = {
    // whitelisted url for images 
    images:{
        remotePatterns:[
            {
                protocol: "https",
                hostname: "www.shareicon.net"
            }
        ]
    }
}

module.exports = nextConfig
