export type WebConfig = {
    title: string
    description: string,
    Logo: Logo,
    NavBarLinks: NavBarLinks,
    SocialLinks:SocialLinks,
    Email: string
}

export type Logo = {
    id:string,
    filename:string,
    filesize:number,
    height:number,
    width:number,
    url:string
}

export type NavBarLinks =  [
    {
        Section: string,
        idSection: string
        id: string
    }
]

export type SocialLinks = [
    {
        id: string,
        title:string,
        url:string,
        icon:string
    }
]