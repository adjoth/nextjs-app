

export default function Page(){

    async function submitForm(data){
        "use server";
        const formField = {
            email: data.get("email"),
            message: data.get("message")
        };
        console.log("formField", formField);
        console.log("TODO: Send forms to backend");
        return formField;
    }

    return (
        <main className="max-w-md mx-auto p-6 shadow-md rounded-md border border-blue-300">
            <h1 className="text-2xl font-bold text-center mb-6">Contact Page</h1>
            <form className="space-y-4" action={submitForm}>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gravy-700">Email</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email"
                        display="flex"
                        required
                        className="text-black border-red-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
                <div>
                    <lable htmlFor="message" className="block text-sm font-medium text-gravy-700">Message</lable>
                    <textarea
                        id="message"
                        name="message"
                        rows="3"
                        className="text-black border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    ></textarea>
                </div>
                <button type="submit" className="text-white bg-blue-600 rounded-md p-3">Send Message</button>
            </form>
        </main>
    )
}