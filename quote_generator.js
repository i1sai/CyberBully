
    const quotes = [
      "The first step to protecting yourself is to stay informed.",
      "In the world of cybersecurity, it's better to be proactive than reactive.",
      "Stay safe, stay vigilant.",
      "Good security requires constant attention and awareness.",
      "A strong password is your first line of defense.",
      "Security is everyone's responsibility."
    ];

    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById('quote').textContent = randomQuote;
    