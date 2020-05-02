## Introduction

Idea is to build reusable react modal component which should be accessible according to the modern web accessibility practices.

To give overview of react-modal , we have bundled Demo.

## How to run Demo 

 1. Go to modal-react directory under react-excercises folder
 2. Run `npm i`
 2. Run `npm run start` 


##  You can pass below props with Modal    
                                        Default     
 - onModalClosed={props.onModalClosed}                required
 - title                                'Modal'       optional
 - borderRadius                         0px           optional
 - backgroundColor                      #fff          optional
 - titleColor                           #000          optional
 - titleSize                            16px          optional
 
 
 ## Future implementations

 - transitions
 - scrollable
 - modal footer component
 - modal related events 
   - backDropClick
   - onOpened



## Requirements achieved 
  - [x] Tab , Escape handled as per aria-practices
  - [x] The Modal component should be re-usable and a module that can be shared.
  - [x] You component should be able to render multiple modals by calling the component     multiple times.
  - [x] It should have a defined input interface and a defined output.
  - [x]You need to design an API letting the user override in-built functionalities as they please.
  - [x] All the over-ridable APIs need to have sensible defaults.
  - [x] Make a small application where you import your modal.
  - [x] Create login and signup forms.
  - [x] Show the forms in their respective modals.
  - [x] When the user clicks **Submit on the login modal**, navigate to a page "Displaying Dashboard"
  - [x] When the user clicks Submit on Signup modal, navigate to a page "Displaying Dashboard"
  - [] Test cases - partial done
 

## Check src/pages/login to see how to use modal component

## You are welcome to contribute and give suggestions 
## To watch for development work , have a look at our project board - https://github.com/pesto-students/deep-dive-Gaurav2048/projects/1