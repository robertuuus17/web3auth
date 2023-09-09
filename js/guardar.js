const guardar = () => {
    // Agregar datos a Firebase Firestore
    db.collection("usuarios").add({
        Name: name,
        Email: email,
        Project: project,
    })
        .then((docRef) => {
            console.log("Documento escrito con ID: ", docRef.id);
            alert("¡Gracias por tus datos!");
        })
        .catch((error) => {
            console.error("Error al agregar el documento: ", error);
            alert("Ocurrió un error al guardar los datos.");
        });
};
