function constructionCrew(object) {


  
    if (object.dizziness === true) {
      let requiredWater = object.weight * object.experience * 0.1;
      object.levelOfHydrated = requiredWater;
      object.dizziness = false;
    }
    
    return object;
      
    }

constructionCrew({ weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true }
  );