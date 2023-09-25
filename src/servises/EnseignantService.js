import axios from "axios";
import React,{useEffect} from "react";
const enseignant_API_BASE_URL="http://localhost:9001/enseignant-service/enseignants"
const enseignant_API_BASE_URL_COUNT="http://localhost:8080/api/v1/nbre"
class enseignantService
{

    getenseignants(){
        return axios.get(enseignant_API_BASE_URL);
    }
    createenseignants(enseignant){
        return axios.post(enseignant_API_BASE_URL,enseignant);
    }
    getenseignantsById(enseignantId){
        return axios.get(enseignant_API_BASE_URL+'/'+enseignantId)
    }
    updateenseignant(enseignant,enseignantId){
        return axios.put(enseignant_API_BASE_URL+'/'+enseignantId , enseignant)
    }
    deleteenseignantoyee(enseignantoyeeId){
        return axios.delete(enseignant_API_BASE_URL+'/'+enseignantoyeeId)
    }
    getNbrePerGender(){
        return axios.get(enseignant_API_BASE_URL_COUNT)
    }
   


}
export default new enseignantService()