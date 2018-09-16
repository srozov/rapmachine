import axios from'axios';

export function getRhymes(word){
    return axios.get('http://rhymebrain.com/talk?function=getRhymes&word=' + word)

}