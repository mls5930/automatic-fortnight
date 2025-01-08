const boardRepository = require('../repositorys/board.repository');

const findAll = async() => {
    const result = await boardRepository.findAll();
    return result
}

const findOne = async(id) => {
    const [result] = await boardRepository.findOne(id)
    return result
}

/*
    data = {
        user_id: "wnqudgus1234",
        writer: "주병현",
        title: "제목입니다.",
        content: "내용입니다.",
    }
*/
const create = async(data) => {
    const result = await boardRepository.create(data);
    return result
}

const update = async(data) => {
    const result = await boardRepository.update(data);
    return result
}

module.exports = {
    findAll,
    findOne,
    create,
    update
}