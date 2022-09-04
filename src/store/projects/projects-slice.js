const { createSlice } = require("@reduxjs/toolkit");

const projectSlice = createSlice({
  name: "projects",
  initialState: {
    list: [],
    projectsChanged: false,
    projectDelete: false,
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
          id: newProject.id,
          title: newProject.title,
          subtitle: newProject?.subtitle,
          description: newProject.description,
          images: newProject.images,
          technologies_used: newProject.technologies_used,
          link: newProject?.link,
          github: newProject?.github,
        });
        state.projectsChanged = true;
      } else {
        return;
      }
    },
    updateProject(state, action) {
      const findItem = state.list.findIndex(
        (project) => project.id === action.payload.id
      );

      state.list[findItem] = action.payload;
      state.projectsChanged = true;
    },
    deleteProject(state, action) {
      const filterProjects = state.list.filter(
        (project) => project.id !== action.payload
      );
      state.list = filterProjects;
      state.projectDelete = true;
    },
  },
});

export const projectsActions = projectSlice.actions;
export default projectSlice;
