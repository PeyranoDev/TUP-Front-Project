export interface iLogin {
    username : string,
    password : string
}

export interface iResLogin {
    status: string,
    mensaje: string,
    token?: string
}

export interface iRegister {
    username: string,
    password: string,
    nombre: string,
    apellido: string,
}

export interface iResRegister {
    status: string;
}