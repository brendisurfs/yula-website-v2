// public api to pull from
export const API_URL =
    process.env.NODE_ENV == "production"
        ? process.env.NEXT_PUBLIC_API_URL
        : "https://yula-admin.herokuapp.com";

export const socials = {
    twitter: "https://twitter.com/OfficialYula",
    instagram: "https://www.instagram.com/OfficialYula/",
    tiktok: "https://www.tiktok.com/@officialyula?lang=en",
    youtube: "https://www.youtube.com/channel/UCJ37OcUpTcj_ic5SX8lv-9g",
    soundcloud: "https://soundcloud.com/officialyula",
};
