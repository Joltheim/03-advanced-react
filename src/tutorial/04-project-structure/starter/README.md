<!-- In this section, we will create all files and folders from scratch. -->

notes: ES7 Snippet commands
    -rafce (arrow func w/ export)
    -rfce (regular func w/ export)
        both will create component with same name as file

If you have a lot of components to import into root component (app.jsx)
you can create a pages folder which contains an index.jsx file
This index file should import all the components into itself & export default
Then in app.jsx you will only have to import the one index file (cleaner code)