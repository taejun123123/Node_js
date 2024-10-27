const Room = require('../schemas/room');
const Chat = require('../schemas/chat');

exports.removeRoom = async (roomId)=>{
    try{
        await Room.deleteOne({ _id: roomId });
        await Chat.deleteMany({ room: roomId }); // 여러 개의 채팅을 삭제할 때는 deleteMany 사용
    }catch(error){
        throw error;
    }
};