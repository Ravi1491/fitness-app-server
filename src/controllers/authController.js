export const register = async (req, res) => {
  try {
    const { name, email, phoneNumber, password } = req.body;

    console.log(name, email, phoneNumber, password);
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    console.log(email, password);
  } catch (error) {
    console.log(error);
    res.status(404).json({ success: "failed", message: error.message });
  }
};
