export const ALPHABET = [
  "A", "B", "C", "D", "E", "F",
  "G", "H", "I", "J", "K", "L",
  "M", "N", "O", "P", "R", "S",
  "T", "U", "V", "W", "X", "Y", "Z"
];

export const WORDS = [
  "Admin",
  "Algorithm",
  "Application",
  "Backup",
  "Boot",
  "Browser",
  "Bug",
  "Casing",
  "Charger",
  "Cloud",
  "Code",
  "Command",
  "Computer",
  "Content",
  "Control",
  "CPU",
  "Crash",
  "Cursor",
  "Cut",
  "Dashboard",
  "Data",
  "Database",
  "Debugging",
  "Delete",
  "Deploy",
  "Desktop",
  "Developer",
  "Development",
  "Device",
  "Document",
  "Download",
  "Drag",
  "Drivers",
  "Edit",
  "Encryption",
  "Environment",
  "Error",
  "External",
  "Fan",
  "Feature",
  "Feedback",
  "File",
  "Folder",
  "Font",
  "Freeze",
  "Functionality",
  "Hard",
  "Hardware",
  "Help",
  "Highlight",
  "Icon",
  "Interface",
  "Internet",
  "Keyboard",
  "Launch",
  "Layout",
  "Login",
  "Logout",
  "Memory",
  "Mobile",
  "Motherboard",
  "Mouse",
  "Mouse",
  "Network",
  "Open",
  "Operating",
  "Options",
  "Partition",
  "Password",
  "Paste",
  "Plugin",
  "Port",
  "Power",
  "Preview",
  "Programming",
  "RAM",
  "Save",
  "Save",
  "Screen",
  "Scroll",
  "Server",
  "Software",
  "Sound",
  "Speakers",
  "Spreadsheet",
  "Subscribe",
  "Support",
  "Testing",
  "Toolbar",
  "Touchpad",
  "Update",
  "Upload",
  "User",
  "Video",
  "Widget",
  "Window",
  "Wireless",
]


export function showNotification(setter) {
  setter(true);
  setTimeout(() => {
    setter(false);
  }, 2000);
}

export function checkWin(correct, wrong, word) {
  let status = 'win';

  // Check for win
  word.split('').forEach(letter => {
    if (!correct.includes(letter)) {
      status = '';
    }
  });

  console.log("correct ", correct);
  console.log("wrong ", wrong);
  console.log("word ", word);

  // Check for lose
  if (wrong.length >= 6) status = 'lose';
  // console.log(status);
  return status
}