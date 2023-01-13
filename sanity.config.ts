import { defineConfig, StudioNavbar } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'
import { myTheme } from './theme'
import StudioCNavbar from './components/StudioCNavbar'
import Logo from './components/Logo'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID! // "pv8y60vp"
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET! // "production"

export default defineConfig({
  basePath: '/studio',
  name: 'TPICPC_Content_Studio',
  title: 'TPICPC Content Studio',
  projectId,
  dataset,

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
  studio:{
    components:{
      logo:Logo,
      navbar:StudioCNavbar,
    }
  },
  theme: myTheme,
})
