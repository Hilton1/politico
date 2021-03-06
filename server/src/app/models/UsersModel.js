const db = require('../../database');

const get = async (filterUser) => {
  const user = await db('users').select('*').where(filterUser).first();

  return user;
};

const create = async (userData) => {
  const [user] = await db('users').insert(userData).returning('*');

  return user;
};

const update = async (userData, userId) => {
  await db('users').update(userData).where({ id: userId });
};

module.exports = { get, create, update };
