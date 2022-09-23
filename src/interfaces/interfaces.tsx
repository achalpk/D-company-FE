export interface expertProps{
    loading : boolean,
    error : string,
    teams : teamsInterface[],
    getFetchTeams ?: (()=>void) 
}

export interface ShowFeedbackProps{
    feedbackData : feedbackInterface[],
    feedback : feedbackInterface, 
    deleteItem : (id : number)=>void
    updateItem : (id : number,updatedfeedback:{feedbacktitle:string,feedbackMsg:string})=>void
}

export interface HeaderProps{
    auth : authStateInterface,
    setAuthenticate : ()=>unknown
}

export interface contactInterface{
    name ?: string, 
    email ?: string, 
    phone ?: string, 
    subject ?: string, 
    message ?: string 
} 

export interface authStateInterface{
    isAuth : boolean|null, 
    authUser : string|null
}

export interface authInterface{
    auth : authStateInterface
}

export interface servicesInterface{
    id: number
    image : string,
    title : string,
    short_desc : string,
    long_desc : string
}

export interface teamsInterface{ 
    id : string,
    image : string, 
    name : string, 
    position : string,
    team: string,
    location: string 
}

export interface feedbackInterface{
    feedbacktitle : string,
    feedbackMsg : string,
    id : number
} 

export interface initialStateInterface{
    services ?: servicesInterface[],
    teams ?: teamsInterface[],
    feedback ?: feedbackInterface, 
    feedbackData ?: feedbackInterface[],
    contact ?: contactInterface, 
    loading : boolean,
    error : string,
}

