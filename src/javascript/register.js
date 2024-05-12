const postRegister = async (req, res) => {
    const { name, apellido, password,correo , corfinm,} = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const insertQuery ='INSERT INTO usuarios (nombre, apellido, correo, contraseña) VALUES (?, ?, ?, ?)';
    const values = [name, apellido, correo, hashedPassword, corfinm];
    connection.query(insertQuery, values, function(error) {
    if (error) {
        console.error('Error al insertar usuario:', error);
        return;
    }
    res.render('index',{ mensaje: 'Usuario registrado' });
    });
};