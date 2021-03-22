import fetch from "isomorphic-unfetch";

export default async (req, res) => {
  // 1. Destructure the email address from the request body.
  const { email, firstName, lastName } = req.body;

  if (!email) {
    // 2. Throw an error if an email wasn't provided.
    return res.status(400).json({ error: "Email is verplicht" });
  }

  try {
    // 3. Fetch the environment variables.
    const API_KEY = process.env.GETREVUE_API_KEY;

    const data = {
      email: email,
      first_name: firstName,
      last_name: lastName,
      double_opt_in: true,
    };

    // 4. Send a POST request to getrevue.
    const response = await fetch(`https://www.getrevue.co/api/v2/subscribers`, {
      body: JSON.stringify(data),
      headers: {
        Authorization: `Token ${API_KEY}`,
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    // 5. Swallow any errors from getrevue and return a better error message.
    if (response.status >= 400) {
      return res.status(400).json({
        error: `Er ging wat mis tijdens het aanmelden voor de nieuwsbrief. Stuur een e-mail naar codeklets@protonmail.com en dan maken we het in orde.`,
      });
    }

    // 6. If we made it this far, it was a success! 🎉
    return res.status(201).json({ error: "" });
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
};
