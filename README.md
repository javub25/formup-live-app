# FormUp live App

You can create custom forms in the Build tab by selecting elements, validating fields without coding, and editing fields. <br/>
Use the Preview tab to adjust settings and export form results in a CSV file.



## Benefits ⭐

1️⃣ &nbsp;Real-time validation of custom elements. <br />
2️⃣ &nbsp;CSV data export for Excel analysis or database integration. <br />
3️⃣ &nbsp;Real use case as job application form, surveys. <br />


## Demo
![Alt text](https://res.cloudinary.com/dukcdzezp/image/upload/v1737995587/msedge_n0xr86r1Bv_oogrwz.gif "Demo FormUp")

## Stack

1️⃣ &nbsp;React + TypeScript - Build a typed Formup UI. <br />
2️⃣ &nbsp;Shadcn/ui + TailwindCSS - Library components for: <br />
   <div style="padding:0px 20px">
    1️⃣ &nbsp;Form fields elements <br />
    2️⃣ &nbsp;Build and Preview tabs <br />
  </div>  
<br />
3️⃣ &nbsp;Dndkit - Drag and drop functionality to move FieldLibrary elements in the FormBuilder area. <br/>
4️⃣ &nbsp;Zustand - Synchronize Droppable items data between Build and Preview Tabs.<br />
5️⃣ &nbsp;React Hook Form - Validate form fields.

<br />

## Structure

```css
public/                         # Public assets accessible from the root of the server.
├── drag.svg                    # Icon for dragging functionality.
src/                            # Main source code of the application.
├── assets/                     # Static assets like images, icons, and fonts.
│   └── svg/                    # SVG icons used in the app.
│       ├── alert.svg
│       ├── download.svg 
│       ├── pencil.svg
│       ├── plus.svg
│       ├── save.svg
│       ├── trash.svg     
├── components/                 
│   ├── Draggable/              # Components for draggable items.
│   │   ├── Draggable.tsx       # List of draggable items based on id and type
│   │   └── DraggableItem.tsx   # Render a draggable item
│   ├── Droppable/              
│   │   └── DroppableEditor.tsx # Edit a droppable element
│   │   └── DroppableList.tsx   # Render each droppable item into Preview tab   
│   ├── FieldLibrary/           # Display form field elements.
│   │   └── FieldLibrary.tsx    
│   ├── Fields/                 # Form field components
│   │   ├── Email.tsx           
│   │   ├── FullName.tsx        
│   │   ├── MultipleChoice.tsx  
│   │   └── SingleChoice.tsx    
│   ├── FormBuilder/            # Form builder component.
│   │   └── FormBuilder.tsx     
│   └── TabsNavigation/         # Allows to change between Build and Preview tab.
│       └── TabsNavigation.tsx 
│
├── hooks/                      # Custom hooks for reusable logic.
│   ├── ActiveDraggable/
│   │   └── useActiveDraggable.tsx  # Allows to save the current active draggable id.
│   ├── CreateDraggable/
│   │   └── useCreateDraggable.tsx  # Create draggable items for form elements.
│   ├── CreateDroppable/
│   │   └── useCreateDroppable.tsx  # Create droppable area for formBuilder.
│   ├── OverDroppable/
│   │   └── useOverDroppable.tsx   # Handle droppable area interaction.
│   └── Form/
│       └── useFormDroppable.ts     # Create form for DroppableEditor component.
│       └── useFormOptions.ts       # Create dynamic form options.
│       └── useFormPreview.ts       # Create form for Preview tab.
│       └── useValidateRules.ts     # Create Validation for each droppable item.
├── lib/                            # Auxiliary libraries and reusable utilities.
│
├── data/
│   └── models/
│       └── DraggableList.tsx     # Define each Draggable item with id and label.
│
├── pages/                      # Main pages of the application.
│   ├── Build.tsx               # Page to build the form.
│   └── Preview.tsx             # Page to preview the form.
│
├── store/                      # Zustand Global state management
│   └── utils                   # Methods to use for Zustand store
│   └── index.ts                # File to export Zustand utils and middleware.
│   ├── useDroppableStore.ts    # Store to manage droppable state.
│
├── types/                      # TypeScript types
│   ├── DndContext              # Drag and drop context types.
│   └── Draggable               # Draggable elements types.
│   └── Droppable               # Droppable elements and store types.
│   └── Form
│     └── CSVData.ts            # Type of data sent to the CSV File
│     └── Form.ts               # Control Type and Form Data.
│     └── ValidationRules.ts    # Validation form field rules.
├── utils/                      # Reusable utility functions.
│   ├── Draggable/
│   │   └── Attributes/
│   │       └── updateDescription.tsx # Update draggable item name.
│   ├── Events/
│   │   ├── handleEvents.tsx    # Event handling utility.
│   │── getActiveElement.tsx    # Gets the active element.
│   │── getUniqueID.tsx         # Utility to generate unique IDs.
│   ├── Form/
│   │   ├── exportCSV.ts        # Allows you to download the form data in a CSV file.
│   │   ├── getCurrentExpression.ts   # Check if FullName or Email are required.
│   │   ├── getCurrentRequired.ts     # Check if Single/MultipleChoice are required.
│   │   ├── getErrors.ts              # Allows you to show an error notification.
│   │   ├── getValidationClicked.ts   # Allows you to show a custom error message.
│   │   ├── hasAvailableOptions.ts    # Validate options to enable Export CSV button.
│   │   ├── index.ts                  # Export custom hooks from react-hook-form.
│   │── ShadcnElements.ts      # Shadcn/ui form components.
│
├── App.tsx                     # Main app entry point.
├── index.css                   # Global styles.
├── main.tsx                    
├── vite-env.d.ts               # Vite configuration for TypeScript.
├── components.json             # Configuration for shadcn/ui components.
```

## How to install 🛠️

1️⃣ &nbsp;Clone repository <br />
```git
git clone "https://github.com/javub25/formup-live-app.git"
```

2️⃣ &nbsp;Install all dependencies from package.json <br />
```npm
npm install
```

3️⃣ &nbsp; Run project development mode<br/>
```npm
npm run dev
```

4️⃣ &nbsp; Run project production mode (optional)<br/>
```npm
npm run build
npm run preview
```


## Sections 📋

### 1️⃣ Pages

### Build

#### Key concepts

● &nbsp;&nbsp; useActiveDraggable <br/>
Custom hook that gives me the current draggable id has already started to move
to the formBuilder area.

● &nbsp;&nbsp; useOverDroppable <br/>
Custom hook that stores a boolean to handle whenever a draggable item is up from
the formBuilder area.
In that case, it will display a green border.
This behavior is handled through onDragOver Event.


● &nbsp;&nbsp; addDroppable <br/>
Zustand method to add a new Droppable item to the store, in case that Draggable item is dropped into to the formBuilder.
This behavior is handled through onDragEnd Event.

● &nbsp;&nbsp; DndContext <br/>
Context that allows to synchronize between draggable item to droppable area. <br/>
In this case, FieldLibrary which contains every form field to the FormBuilder.

● &nbsp;&nbsp; DragOverlay <br/>
Allows you to create a layer as if the draggable element has been moved from its original position. <br/>
This works by using the draggable id saved from the useActiveDraggable hook.


### Preview

#### Key concepts

● &nbsp;&nbsp; DroppableItems <br/>
It will render every draggable item dropped into the form builder based on
its current type (Email, SingleChoice, MultipleChoice...) and dynamic label and options.

● &nbsp;&nbsp; DroppableList <br/>
This is the place where we render each form field based on the draggable item 
moved to the form builder area.
For example, whether user wants to build a custom form with single choice and multiple choice fields, only both fields will be displayed.


### 2️⃣ Types

#### DraggableTypes.tsx

● &nbsp;&nbsp;DescriptionType

```ts
export interface DescriptionType {
    attributes: {
        "aria-roledescription": string;
    };
    description: string;
}
```

Defines the structure of a draggable item's description:

● &nbsp;&nbsp;attributes: An object with an accessibility attribute aria-roledescription <br />
● &nbsp;&nbsp;description: A string describing the unique purpose of the draggable element. <br /> <br />
  An example in the description of form field cases would be: <br /> 
     &nbsp;&nbsp;● draggable Email <br />
     &nbsp;&nbsp;● draggable FullName <br />
     &nbsp;&nbsp;● draggable SingleChoice <br />
     &nbsp;&nbsp;● draggable MultipleChoice <br />
<br />

● &nbsp;&nbsp;DraggableType

```ts
export interface DraggableType {
    id: string;
}
```
Represents a basic type for a draggable item it only contains and id field, which uniquely identifies the item.

● &nbsp;&nbsp;DraggableItemType

```ts
export interface DraggableItemType extends DraggableType {
    key?: string;
    label: string;
}

```
 Extends DraggableType to render Draggable items in FieldLibrary component:

● &nbsp;&nbsp;key: An optional property used to uniquely render each draggable element to the FieldLibrary.<br />
● &nbsp;&nbsp;label: The name of the draggable item.

<br />

#### DroppableStore.ts

```ts
export type DroppableStore = {
    DroppableItems: DroppableItemsType[],
    addDroppable: (currentDraggable: DraggableItemType) => void,
    removeDroppable: (id: DroppableItemsType["id"]) => void,
    updateDroppable: (formData: DroppableItemsType ) => void
}
```

Defines the Zustand store, which includes:

● &nbsp;&nbsp;DroppableItems: An array that stores every draggable item in the build tab.<br />
● &nbsp;&nbsp;addDroppable: Method which stores every draggable item in DroppableItem. <br />
● &nbsp;&nbsp;removeDroppable: Method which removes a droppable item by its id. <br />
● &nbsp;&nbsp;updateDroppable: Method which update droppable element through form fields <br />

#### DroppableType.ts

 ● &nbsp;&nbsp;DroppableType

```ts
export type DroppableType = {
    IsOver: boolean;
}
```
This property is used to check if a droppable area is being ‘overlapped’ by a draggable element.


● &nbsp;&nbsp;DroppableItemsType

```ts
export type DroppableItemsType = {
    id: DraggableType["id"],
    type: string;
    label: string;
    options?: {value: string} [],
    validation?: ValidateDroppable,
    register?: UseFormRegisterCSV
};
```
This type indicates the structure that each droppable element must follow: 

● &nbsp;&nbsp; id: unique id from the type field (FullName, Email...), followed by a random number.<br/>
● &nbsp;&nbsp; type: represents the allowed types (FullName, Email, SingleChoice, MultipleChoice).<br/>
● &nbsp;&nbsp; label: represents the name of each field chosen by the user. <br/>
● &nbsp;&nbsp; options: List to store options.
It's optional because it's only required in SingleChoice and MultipleChoice to choose one or multiple values.
<br/>
● &nbsp;&nbsp; validation: Object to store the expression and custom error message for each form field.
It's optional because user could store their fields without validate each other.
<br/>
● &nbsp;&nbsp; register: Allows to store each field sent to CSV file.
<br/>

● &nbsp;&nbsp;DroppableListType

```ts
export type DroppableListType = Omit<DroppableItemsType, 'id'>
```
Represents each droppable item inside Preview tab.
I use Omit, because I need each props from DroppableItemsType except id. 
<br />

● &nbsp;&nbsp;DroppableField

```ts
export type DroppableField = Pick<DroppableItemsType, 'label' | 'options' | 'validation' | 'register'>;

```
Each field such as FullName, SingleChoice..., have dynamic title (label) and options and the user can validate their fields and register them in the Preview tab.

I use Pick, to store only 4 DroppableItemsType props.

● &nbsp;&nbsp;DroppableEditorProps
```ts
export type DroppableEditorProps = Pick<DroppableItemsType, 'id' | 'label'>;
```
Sends the name of the form element to be displayed to the DroppableEditor

● &nbsp;&nbsp;DroppableValidationProps
```ts
export type DroppableValidationProps = Pick<DroppableItemsType, 'type'> & {
    register: UseFormRegisterType
}
```
It is used to know which field of the form is written depending on its type. <br/>
<b>register</b>: we will store all the data of the DroppableEditor component in the form.<br/>
This way we will be able to access them through the Preview tab.


4️⃣ &nbsp;Form

● &nbsp;&nbsp;Form.ts

```ts
export type ControlType = Control<DroppableItemsType>;
```
ControlType --> Responsible for connecting form input to the form's state management.

● &nbsp;&nbsp;ValidationRules.ts

```ts
export type ValidationRules = {
   [key: string]: {
        field: string,
        expression?: string,
        shownMessageError: boolean,
        messageError?: string,
    }
}

export type ValidateDroppable = Pick<ValidationRules[string], 'expression' | 'messageError' | 'shownMessageError'>

export type ValidationClicked = {
    e: React.ChangeEvent<HTMLInputElement>, 
    type: string, 
    setValidateRules: (update: (rules: ValidationRules) => ValidationRules) => void
}
```

#### Key concepts

- ValidationRules: Type for each form Field. <br/>
   &nbsp;&nbsp; field: form field name. <br/>
   &nbsp;&nbsp; expression: regular expression is only required in Email and FullName fields.<br/>
   &nbsp;&nbsp; shownMessageError: boolean that tell us whether the button is pressed for the user to write the error message.<br/>
   &nbsp;&nbsp; messageError: a string indicating the custom message error, otherwise it shows a default message.<br/><br/>
    &nbsp;&nbsp;<b>Form fields</b> <br/>
        &nbsp;&nbsp;Email: Invalid Email (in case Validate as Email was marked and the user didn't write anything in the error section). <br/>
        &nbsp;&nbsp;FullName: Invalid Fullname (in case Validate as fullname was marked and the user didn't write anything in the error section). <br/>
        &nbsp;&nbsp;SingleChoice / MultipleChoice: (SingleChoice / MultipleChoice) required. <br/>

- ValidateDroppable: The way we validate each form field <br/>
    
- ValidationClicked: Type to updated shownMessageError from true to false and opposite. <br/>
    &nbsp;&nbsp; - <b>e</b>: Event is triggered once Input element changes. <br/>
    &nbsp;&nbsp; - <b>type</b>: form field name (SingleChoice, MultipleChoice...). <br/>
    &nbsp;&nbsp; - <b>setValidateRules</b>: change showMessageError state to show message error input. <br/>
    

5️⃣ &nbsp;DndContext / EventsType.tsx

● &nbsp;&nbsp;EventsType

```tsx
export type EventsType = {
    handleDragStart: (
        event: DragStartEvent, 
        setActiveDraggable: (currentDraggable : {id: string}) => void
    ) => void;

    handleDragOver: (event: DragOverEvent, 
        setIsOverDroppable: (IsOver: boolean) => void
    ) => void;
    handleDragEnd: (event: DragEndEvent, 
        setIsOverDroppable: (IsOver: boolean) => void,
        addItems: DroppableStore["addDroppable"]        
    ) => void;
}
```
Defines the event handler types for the drag-and-drop functionality. <br />

● &nbsp;&nbsp;handleDragStart: A handler that fires when a drag operation starts. 
<br />

● &nbsp;&nbsp;handleDragOver: A handler that fires when a draggable item is over a droppable area. 
<br />

● &nbsp;&nbsp;handleDragEnd: A handler that fires when the drag operation ends. 


### 3️⃣ Store

● &nbsp;&nbsp;index.ts

```ts
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { useShallow } from "zustand/react/shallow";

export {
    create,
    persist,
    useShallow
}
```
#### Key concepts

- create: Create a zustand store
- persist: Middleware to save all data in localStorage by default
- useShallow: Allows to optimize unnecessary re-renders, rendering the property only when it has changed.
<br /><br/>

● &nbsp;&nbsp;useDroppableStore.ts

```ts
import {create, persist} from "@/store/index.ts"
import { DroppableStore } from "@/types/Droppable/DroppableStore.ts";
import { findDroppableIndex } from "@/store/utils/findDroppableIndex.ts";
import { addDroppableElement } from "@/store/utils/addDroppableElement.ts";

export const useDroppableStore = create<DroppableStore>()(
    persist(
            (set, get) => ({                
                DroppableItems: [],

                addDroppable: (currentDraggable) => 
                {
                    const {id, label} = currentDraggable;
                    
                    const currentDroppable = get().DroppableItems;

                    const {droppableIndex} = findDroppableIndex(currentDroppable, label);

                    if (currentDroppable.length === 0 || droppableIndex === -1) {
                     
                        const {newDroppable} = addDroppableElement({id, label});
                        
                        set({ DroppableItems: [...currentDroppable, newDroppable] });
                    }
                },

                removeDroppable(id) {
                    const currentDroppable = get().DroppableItems;
                    const updatedDroppable = currentDroppable.filter((item) => item.id !== id);
                    
                    set({ DroppableItems: updatedDroppable });
                },
                
                updateDroppable: (formData) => {
                    const {type, label, options, validation} = formData;
                    const currentDroppable = get().DroppableItems;

                    const {droppableIndex} = findDroppableIndex(currentDroppable, type);

                    if(droppableIndex !== -1) {
                         currentDroppable[droppableIndex] = {
                            ...currentDroppable[droppableIndex],
                            label,
                            options, 
                            validation
                        }
                        set({ DroppableItems: [...currentDroppable] });
                    }
                }
            }),

            {
                name: 'droppable-storage'
            }
        ),
    )
```

#### Key concepts

- addDroppable: Add unique items to form builder area. <br/>
- removeDroppable: Delete an existing item. <br/>
- updateDroppable: Update an existing item with custom title, options and validation.

#### Zustand methods
- set: allows you to update the status
- get: allows you to get the current state.



### 4️⃣ Hooks

● &nbsp;&nbsp;useFormDroppable.ts

```ts
import { useForm } from "@/utils/Form/index.ts";
import { DroppableItemsType } from "@/types/Droppable/DroppableType";

export const useFormDroppable = () => 
{
    const { register, handleSubmit, control } = useForm<DroppableItemsType>();

    return {register, handleSubmit, control};
}
```

#### Purpose

it allows to register form fields with their current settings and chosen validation.

● &nbsp;&nbsp;useFormOptions.ts

```ts
import { useFieldArray } from "@/utils/Form/index.ts";
import { ControlType } from "@/types/Form/Form.ts";

export const useFormOptions = (control: ControlType) => {

    const { fields, append, remove } = useFieldArray({
        control,
        name: "options"
    });

    const addOption = () => append({value: `Option ${fields.length + 1}`});
    const removeOption = (index: number) => remove(index);

    
    return {fields, addOption, removeOption};
}
```

#### Purpose

it allows to add dynamic options for SingleChoice and MultipleChoice fields.

#### Key concepts

- useFieldArray: 
    it allows me to add dynamic options to the form.<br/>
    name --> "options": Array where the SingleChoice and MultipleChoice options will be stored.

- addOption: it allows me to add a new Option with an incremented number.
- removeOption: it allows me to remove an option using its index.


● &nbsp;&nbsp;useFormPreview.ts

```ts
import { useForm } from "@/utils/Form/index.ts";
import { CSVData } from "@/types/Form/CSVData.ts"
export const useFormPreview = () => 
{
    const { register, handleSubmit} = useForm<CSVData>({
        reValidateMode: "onSubmit"
    });
    
    return {register, handleSubmit};
}
```

#### Purpose
it allows to register form fields to be sent to CSV file.

● &nbsp;&nbsp;useValidateRules.ts


```ts
import {useState} from "react";
import { ValidationRules } from "@/types/Form/ValidationRules";

export const useValidateRules = () => {
    const [validateRules, setValidateRules] = useState<ValidationRules>( 
        {
            FullName: {
                field: "Validate as a full name",
                expression: "/^[A-ZÁÉÍÓÚÑa-záéíóúñ]+ [A-ZÁÉÍÓÚÑa-záéíóúñ]+$/",
                shownMessageError: false, 
                messageError: "",
            },
            Email: {
                field: "Validate as an email",
                expression: "/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/",
                shownMessageError: false,
                messageError: "",
            },
            SingleChoice: {
                field: "Required",
                shownMessageError: false,
                messageError: "",
            },
            MultipleChoice: {
                field: "Required",
                shownMessageError: false,
                messageError: "",
            },
        }
    ); 
    return {validateRules, setValidateRules}
}
```

#### Purpose

it allows to handle the list of rules for each field in a form.

#### Key concepts

- field: This is the text that is displayed based on the form field type.

- shownMessageError: If the user has clicked the checkbox rules for each form field, it will be updated to true
and "Write your custom message error" will be displayed.
Otherwise, it must be hidden.

- messageError: This is the custom validation text, by default it would be an empty string.


## Manage FormUp Errors ❌

1️⃣ &nbsp;Prevent horizontal scrolling in draggable elements 🛠️
   <div style="padding: 0px 20px">
   
   1️⃣ &nbsp;Solution ✅<br />

   Updated the main of the whole application to disable horizontal scrolling when dragging draggable elements.<br />

   2️⃣ Implementation 🔧</span>

   ```css
    main
    {
      width: 100vw;
      overflow: hidden;
    }
   ```
   3️⃣ &nbsp;Result 🎯
   
   If the user drags each draggable element out of reach of the Form Builder without releasing it:
  
No bottom scroll sidebar is displayed on desktop or mobile.<br />
No interface whitespace is created.

</div>

<br />


2️⃣ &nbsp;Mobility of Draggable elements in the Droppable zone (Mobile) 🛠️

   <div style="padding: 0px 20px">

   1️⃣ &nbsp;Solution ✅<br />

   A class called draggable-item was created for each element. <br />
   The property <b>touch-action: none</b> was added to enable dragging functionality on mobile.<br />

   2️⃣ &nbsp;Implementation 🔧<br />

   ```css
    .draggable-item
    {
      touch-action: none;
    }
   ```

   ```tsx
   //@/components/Draggable/DraggableItem.tsx

   return (
       <div ref={setNodeRef} {...attributes}{...listeners} style={style} className="draggable-item">
          {label}
       </div>
   )
  
   ```
   3️⃣ &nbsp;Result 🎯

   In mobile, we can drag the draggable elements found in the <b>FieldLibrary</b> to the <b>FormBuilder.</b>
   </div>

<br />

3️⃣ &nbsp;Sync between Build Droppable Zone and Preview 🛠️

 <div style="padding: 0px 20px">

   1️⃣ &nbsp;Solution ✅ <br />

   I use Zustand for global state management to synchronize draggable items in the Build tab with the Preview tab. 
   Persist middleware ensures that the state is saved in localStorage and persists even when the browser is closed.

   2️⃣ &nbsp; 🤔 Why Zustand instead of Context API or Redux?

   In my case, when I was developing my prototype for personal use I was looking for a global state with a focus on simplicity and keeping things clean as the code base grows, avoiding unnecessary bundle size in my project.
   Also, Zustand gives a middleware (persist) to save all the data in localStorage automatically.

</div>

## Wiki 📖

1️⃣ &nbsp; Dnd-kit

&nbsp;How can I create Draggable items?
&nbsp;https://docs.dndkit.com/api-documentation/draggable

&nbsp;How can I create the Droppable area?
&nbsp;https://docs.dndkit.com/api-documentation/droppable

&nbsp;How can I communicate Draggable items with the Droppable area?
&nbsp;https://docs.dndkit.com/api-documentation/context-provider

2️⃣ &nbsp; Form

&nbsp;How can I write validation and message error with register -->

&nbsp;https://www.react-hook-form.com/api/useform/register/#options

&nbsp;How can I send data to form?
&nbsp;https://www.react-hook-form.com/api/useform/handlesubmit/

&nbsp;How can I solve useFieldArray: Type String is not assignable to never?
&nbsp;https://github.com/orgs/react-hook-form/discussions/7586

3️⃣ &nbsp; Zustand

&nbsp;How can I create a store with TypeScript?
&nbsp;https://zustand.docs.pmnd.rs/guides/typescript#slices-pattern

&nbsp;How can I store a state in localStorage?
&nbsp;https://zustand.docs.pmnd.rs/middlewares/persist#persisting-a-state

4️⃣ &nbsp; Sooner

&nbsp;Reference API documentation
&nbsp;https://sonner.emilkowal.ski/toast

&nbsp;How can I use TailwindCSS classes?
&nbsp;https://sonner.emilkowal.ski/styling#tailwind-css
