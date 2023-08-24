function startClassification()
{
    navigator.mediaDevices.getUserMedia ({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/ieTwg7Npl/model.json', modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
}

function gotResults(error, results) 
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'I can hear - '+
        results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy - '+
        (results[0].confidence*100).toFixed(2)+" %";
        document.getElementById("result_label").style.color = "rgb("+
        random_number_r+","+random_number_g+","+random_numbe_r+")";
        document.getElementById("result_confidence").style.color = "rgb("+
        random_number_r+","+random_number_g+","+random_numbe_r+")";

        img = document.getElementById('bee.png')
        img1 = document.getElementById('cat.png')
        img2 = document.getElementById('dog.com')
        img3 = document.getElementById('cow.png')
    }
