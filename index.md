![Picture of me](./resources/Me.jpg "A picture of me, Tristin")
# Welcome to my website!
## Here you can read about me and see my resume and projects
### This site is still under constuction
**Here is my contact information**
- Email: tyx001@ucsd.edu
  - Personal Email: tristinyxie@gmail.com
- github: [tristinxie](https://www.github.com/tristinxie)
- Linkedin: [Tristin Xie](https://www.linkedin.com/in/tristin-xie-245918167/)
- Google voice number: 1-657-333-6223
- [Resume](https://drive.google.com/file/d/1elPOPi91Ch-EXuQ-9g71FXFA9HOJ2Oxr/view?usp=sharing)

***To get more personalized contact information, email me***

## The following are a list of my previous projects
For any of these projects you can download them using `git clone`. You can run them with their respective language: `python3` or `npm`.

1. [ACM Teammate Finder](https://github.com/LelandTLong/ACM_Project)

    - Here is a snippet of a main component that I worked on:

    ```
    const createOwnerEvent = (event) => {
        event.preventDefault();
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                // A user is signed in.
                console.log(user) 
                const data = {
                    creator_id: user.uid,
                    description: description,
                    end_date: endDate,
                    max_applicants: maxApplicants,
                    status: true,
                    title: title,
                    type: type.toUpperCase()
                }
                const response = fetch(`/events/create/${user.uid}`, {
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: {'Content-Type': 'application/json'}
                })
                setOpenSubmitDialog(true);
                return response.json;
            } else {
                // No user is signed in.
                console.log('There is no logged in user');
                history.push('/');
            }
        });
    }
    ```
2. [EnviroSense](https://github.com/jerukan/EnviroSense)
3. [PictureTranslate](https://github.com/ucsd-cse-spis-2019/project-tristin-caroline)
## Short Bio

Hello! My name is Tristin Xie and I'm a _second year Computer Science_ student. Currently I'm taking **CSE 101: _Design and Analysis of Algorithms_, CSE 110: _Software Engineering_, CSE 140: _Components and Design Techniques for Digital Systems_, CSE 140L: _Digital Systems Laboratory_.** My favorite food is ~~pizza~~ noodles. I like to program in many programming languages, including C/C++, Java, JavaScript, Python, and more! One of my favorite phrases is:
> Do you like to code?

because yes I do and I hope you do too!
## To do list for finishing my website
- [x] Finish Lab 1 for CSE 110
- [x] Add relevant information
- [ ] Rebuild my website from the ground up in the future
- [ ] \(planned) create a subdomain for my custom domain
##### ©Copyright 2021
###### All rights reserved
