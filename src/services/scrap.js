import api from './api';



class Scrap {

   

    async getScraps() {
        const response = await api.get('/');

        return response.data;
    }

    async postScrap(titulo, telefone, email) {
        const response = await api.post('contatos', {
            title: titulo,
            phone: telefone,
            email: email,
            },
         
        );

        return response.data;
    }

   
    
}

export default new Scrap();