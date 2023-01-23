// Main.js
const MainJs = `import Time from './Time.js'
import "./styles.css";
export default function App () {
  return <Time />
}
`
	
// Time.js
const TimeJs = `import { format } from 'date-fns'
	
export default function Time () {
  const timeString = format(new Date(), 'HH:mm:ss')
  return <h1>The time is {timeString}</h1>
}
`
const stylesCss=`@tailwind base;
@tailwind components;
@tailwind utilities;
`
	
// Location of file as key (always starts with /)
const files = {
  '/Main.js': {
    code: MainJs,
  },
  '/Time.js': {
    code: TimeJs,
  },
  '/styles.css': {
    code : stylesCss,
  }
}
	
export default files
