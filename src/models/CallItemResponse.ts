export enum StatusEnum {"Не дозвонился", "Дозвонился"}

export interface CallItemResponse {
    partnership_id: number,             //???
    partner_data: PartnerData,          //mh 
    date: string,                       //mh    дата
    date_notime: string,                //mh    дата без время
    person_avatar: string               //mh    avatar
    time: number,                       //mh    длительность звонка
    from_number: string,                //mh    откуда звонок - цифры/номер телефона
    // from_extension: string,
    // to_number: string,
    // to_extension: number,
    // is_skilla: boolean,
    status: StatusEnum,                 //mh    "Не дозвонился" | "Дозвонился"
    record: string,                     //mh
    // line_number: string,
    in_out: number,                     //mh     1 - входящий 0 - исходящий
    from_site: string,      
    // source: "",  
    errors: string[],       //mh
    // disconnect_reason: string,
    results: CallsResult[],              //to filter
    // stages: [],                         //Операторы пропустившие звонок, массив
    // abuse: string[],                    //Жалоба от директора на звонок
    // contact_name: string,
    // contact_company: string,
    person_id: number,                  //mh
    person_name: string,                //mh
    person_surname: string,             //mh
    
}

export interface PartnerData {
    id: number,
    name: string,
    phone: number,
};

interface CallsResult {
    type: ResultType,
    title: string,
    tooltip: string
}

enum ResultType {
    is_new = 'новый звонок',
    message = 'обращение',
    order = 'создан заказ',
    preorder = 'создан предзаказ,'
}