import { FormData } from "@/app/sections/contactfrom";
export function sendEmail(data: FormData){
    const apiEndpoint = '/api/email';
    fetch(apiEndpoint, {
        method: 'POST',
        headers:{
            'Content-type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((response) => {
          alert(response.message);
        })
        .catch((err) => {
          alert(err);
        });
    console.log(data);
}