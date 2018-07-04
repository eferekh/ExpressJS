$(document).ready(function () {
    getUsersPics(); // Using Promises.
    getUsersPictures(); // Using Async Await.
});


function getUsersPics() {
    $.ajax({
        url: "http://localhost/users",
        method: "GET"
    }).then((data) => {
        let users = data;

        $.ajax({
            url: "http://localhost/usersPictures",
            method: "GET"
        }).then((userdata) => {
            let usersPics = userdata;

            for (let i = 0; i < users.length; i++) {
                $("body").append(users[i].name + "<br>");

                for (let j = 0; j < usersPics.length; j++) {
                    if (users[i].pictureID == usersPics[j].id) {
                        $("body").append(`<img src="${usersPics[j].pictureURL}" alt="Photo" /> <br><hr>`);
                    }

                }
            }
        });
    });
}


async function getUsersPictures() {
    let users = await $.ajax({
        url: "http://localhost/users",
        method: "GET"
    });

    let photos = await $.ajax({
        url: "http://localhost/usersPictures",
        method: "GET"
    });

    for (let i = 0; i < users.length; i++) {
        $("body").append(users[i].name + "<br>");

        for (let j = 0; j < photos.length; j++) {
            if (users[i].pictureID == photos[j].id) {
                $("body").append(`<img src="${photos[j].pictureURL}" alt="Picture" /> <br><hr>`);
            }
        }
    }
}
