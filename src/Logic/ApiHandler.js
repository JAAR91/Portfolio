const sendInfo = async(name, email, message, setLoading, setMessages) => {
  await fetch('https://formspree.io/f/xdoyqoze', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name,
      email,
      message,
    }),
  }).then((data) => {
    console.log(data);
    setLoading(false);
    switch (data.status) {
      case 404:
        setMessages(2);
        break;
      case 200:
        setMessages(1);
        break;
      default:
        setMessages(2);
    }
  })
  .catch(() => {
    setMessages(2);
  });
};

export default sendInfo;