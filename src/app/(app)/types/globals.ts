export type WebConfig = {
    title: string
    description: string,
    Logo: Logo,
    NavBarLinks: NavBarLinks,
    SocialLinks:SocialLinks,
    Email: string
}

type Logo = {
    id:string,
    filename:string,
    filesize:number,
    height:number,
    width:number,
    url:string
}

type NavBarLinks =  [
    {
        Section: string,
        idSection: string
        id: string
    }
]

type SocialLinks = [
    {
        id: string,
        title:string,
        url:string,
        icon:string
    }
]