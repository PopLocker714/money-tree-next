const sendTgMessage = async (text: string) => {
  fetch(`https://api.telegram.org/bot${process.env.BOT_TOKEN || ""}/sendMessage`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      chat_id: process.env.BOT_CHAT_ID,
      text,
      parse_mode: "HTML",
    }),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

export default sendTgMessage;
