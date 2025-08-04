'use client';
import Link from "next/link";
export default function Test() {

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault();
        const formData = new FormData(event.target as HTMLFormElement);
        try{
            const response = await fetch('/api/contacttest', {
                method: 'post',
                body: formData,
            });
           if(response.ok){
                const responseData = await response.json();
                console.log(responseData['message']);
                alert('Form submitted successfully!');
            } else {
                const errorText = await response.text(); // HTML or plain error
                throw new Error(`HTTP ${response.status}: ${errorText.slice(0, 100)}`);
            }
          //  const responseData = await response.json();
        }
        catch(error) {
            console.error('Error submitting form:', error);
            alert('There was an error submitting the form. Please try again later.');
        }
    };
    return (
        <main className="flex min-h-screen flex-col items-center" >
            <div className="relative flex place-items-center p-5 bg-white text-black">
                <Link href="/">Home</Link>
            </div>

            <form onSubmit={handleSubmit} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                <div className="mb-4 flex flex-col w-500">

                    <label htmlFor="form-name">Name </label>
                    <input id="form-name" autoComplete="name" maxLength={50} size={30} name="name" className="text-black"/>

                    <label htmlFor="form-email"> Email:</label>
                    <input id="form-email" required autoComplete="email" maxLength={80} name="email" type="email" className="text-black"/>

                    <label htmlFor="form-message"> Message: </label>
                    <textarea id="form-message" required name="message" rows={5} className="text-black" />

                </div>
                <button className=" rounded bg-sky-400" type="submit">Send</button>
            </form>
        </main>
    );
}