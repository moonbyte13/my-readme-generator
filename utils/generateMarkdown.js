// const questions = process.argv
// const questions = process.argv[3]


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
/* function renderLicenseBadge(license) {
  
} */

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const noSpaces = license.replaceAll(' ', '+')
  const link = 
  `https://img.shields.io/static/v1?label=License&message=${noSpaces}&color=blueviolet`
  return link
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === 'No License'){
    return `> No License`
  }
  if(license === 'Apache License 2.0'){
    return `
> Copyright 2023 xMoonphasex
>
> Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
>
> Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
> See the License for the specific language governing permissions and limitations under the License.
`
  }
  if(license === 'MIT License'){
    return `
> Copyright 2023 xMoonphasex
>
> Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
>
> The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
`
  }
  if(license === 'GNU General Public License v3.0'){
    return `
> Copyright (C) 2023  xMoonphaseX
> 
> This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation either version 3 of the License, or (at your option) any later version.
>
> This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License for more details.
>
> You should have received a copy of the GNU General Public License along with this program.  If not, see <http://www.gnu.org/licenses/>.    
`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // console.log('GENERATING');
  // console.log('data', data)
  return `
# ${data.title}

## Badges 🛡
[![](${renderLicenseLink(data.license)})](#license)

## Description 📝

${'```'}
${data.description}
${'```'}

## Table of Contents 📋 (Optional)

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [FAQ](#faq)

<a name="installation"></a>
## Installation ⚒

${'```'}
${data.installation}
${'```'}

<a name="usage"></a>
## Usage 	🅭

${'```'}
${data.usage}
${'```'}

<a name="contributing"></a>
## Contributing

${'```'}
${data.contributing}
${'```'}

<a name="tests"></a>
## Tests 🧪

${'```'}
${data.tests}
${'```'}

<a name="license"></a>
## License 	🔑

${renderLicenseSection(data.license)}

<a name="faq"></a>
## FAQ 	❓

* What is your Github link?
  * [Github](https://github.com/${data.username})
* What is your email?
  * [Email](mailto:${data.email})
`
}

module.exports = generateMarkdown;