const { Types: { ObjectId } } = require('mongoose');

const validateDbId = (id) => {
    const isValid = ObjectId.isValid(id);
    if (!isValid) throw new Error('This id is not valid or not found');
}

module.exports = { validateDbId };