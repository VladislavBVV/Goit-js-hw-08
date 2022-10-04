'use strict';
import throttle from 'lodash.throttle'; 
const formRef = document.querySelector(".feedback-form");

const LOCAL_STORAGE_KEY = "feedback-form-state";

const save = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.error("Set state error: ", error.message);
  }
};

const load = (key) => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error("Get state error: ", error.message);
  }
};

// console.log(formRef.elements.email);
// console.log(formRef.elements.message);

initPage();

const onFormInput = (event) => {
    const { name, value } = event.target;
    
    // try {
        let saveData = load(LOCAL_STORAGE_KEY);
        saveData = saveData ? saveData : {}
        // if (saveData) {
        //     saveData = JSON.parse(saveData);
            
        // } else { 
        //     saveData = {}
        // }
        saveData[name] = value;
        // const stringifyData = JSON.stringify(saveData);
        // localStorage.setItem(LOCAL_STORAGE_KEY, stringifyData);

        save(LOCAL_STORAGE_KEY, saveData);
            console.log("saveData", saveData);
    // } catch (error) {
    //     console.log(error);
    // }
    
    // console.log(formData);

    // try {
    //     const stringifyData = JSON.stringify(formData);
    //     console.log(stringifyData);
    //     localStorage.setItem(LOCAL_STORAGE_KEY, stringifyData);
    // } catch (error) { 
    //     console.error(error);
    // }
};

const throttledOnFormInput = throttle(onFormInput, 500);

formRef.addEventListener("input", throttledOnFormInput);


function initPage() {
  const saveData = load(LOCAL_STORAGE_KEY);
  console.log(saveData);
  if (!saveData) {
    return;
  }
      Object.entries(parseData).forEach(([name, value]) => {
          formRef.elements[name].value = value
      });
  // try {
  //         console.error()
  //     const parseData = JSON.parse(saveData);
  //     Object.entries(parseData).forEach(([name, value]) => {
  //         formRef.elements[name].value = value
  //     });
  //         console.log('parseData', parseData);
  //     } catch (error) {
  //         console.error(error);
  //     }
}

const handleSubmit = event => { 
    event.preventDefault();
    const { elements: { email, message } } = event.currentTarget;
    // console.log(event.currentTarget);
    // console.log(email.value);
    // console.log(message.value);
    console.log({ email: email.value, message: message.value });
    event.currentTarget.reset();
    localStorage.removeItem(LOCAL_STORAGE_KEY);
}

formRef.addEventListener("submit", handleSubmit);


