

export const getMethod = async (url) => {
    try {
        const response = await fetch(`${url}`);
        if (!response.ok) throw new Error('Ответ сети был не ok.');
        const data = await response.json();
        return data;
    } catch (e) {
        //console.log(e.message);
        return e.message;
    }
};