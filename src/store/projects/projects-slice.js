const { createSlice } = require("@reduxjs/toolkit");

const projectSlice = createSlice({
  name: "projects",
  initialState: {
    list: [],
  },
  reducers: {
    fillData(state, action) {
      state.list = action.payload;
    },
    addProject(state, action) {
      const newProject = action.payload;
      const existingProject = state.list.find(
        (item) => item.title === newProject.title
      );

      if (!existingProject) {
        state.list.push({
          title: newProject.title,
          subtitle: newProject?.subtitle,
          description: newProject.description,
          images: newProject.images,
          technologies_used: newProject.technologies_used,
          link: newProject?.link,
          github: newProject?.github,
        });
      } else {
        return;
      }
    },
    deleteProject(state, action) {
      console.log(state, action);
      const filterProjects = state.list.filter(
        (project) => project.id !== action.payload
      );

      state.list = filterProjects;
    },
  },
});

export const projectsActions = projectSlice.actions;
export default projectSlice;
