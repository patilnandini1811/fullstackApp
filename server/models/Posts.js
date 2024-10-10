module.exports = (Sequelize,DataTypes) =>{
const Posts = Sequelize.define("Posts",{
title:{
    type: DataTypes.STRING,
    allowNull:false,
},
postText:{
    type: DataTypes.STRING,
    allowNull:false,
},
userName:{
    type: DataTypes.STRING,
    allowNull:false,
},
});
Posts.accociate =(models)=>{
    Posts.hasMany(models.Comments,{
        onDelete:"cascade",
    });
};

return Posts
}