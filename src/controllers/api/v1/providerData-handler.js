const getProviderData = (req, res) => {
  res.json({ username: 'Mostafa Mostafa', rate: 3.5, currentStep: 1 });
};

module.exports = {
  getProviderData
};
