function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier= ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/DTbnO6440/model.json',modelReady);
}

function modelReady() 
{
    classifier.classify(gotResults);
}

function gotResults(error,results) 
{
  if(error)
   {
     console.log(error)
  }
  else
  {
      console.log(results);
      random_number_r= Math.floor(Math.random() * 255) + 1;
      random_number_g= Math.floor(Math.random() * 255) + 1;
      random_number_b= Math.floor(Math.random() * 255) + 1;

      
    }
}


