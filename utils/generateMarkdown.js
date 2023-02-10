
// license badge link function that returns the license link
function renderLicenseLink(license) {

  // If there is no license, return an empty string
  if(license === 'No License'){
    return '';
  }
  // replace spaces for link to work
  const noSpaces = license.replaceAll(' ', '+');
  // link literal
  const link = 
  `https://img.shields.io/static/v1?label=License&message=${noSpaces}&color=blueviolet`

  return link
}

// licence section function that returns the license section of README
function renderLicenseSection(license) {
  // If there is no license, return an empty string
  if(license === 'No License'){
    return ``
  }

  return `
> This project is protected by a ${license}.

> THE SOFTWARE IS PROVIDED "AS IS". IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
`
}

// markdown function to generate markdown for README
function generateMarkdown(data) {

  return `
# ${data.title}

## Badges 📛
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

<a id="installation"></a>
## Installation ⚒

${'```'}
${data.installation}
${'```'}

<a id="usage"></a>
## Usage 	©

${'```'}
${data.usage}
${'```'}

<a id="contributing"></a>
## Contributing

${'```'}
${data.contributing}
${'```'}

<a id="tests"></a>
## Tests 🧪

${'```'}
${data.tests}
${'```'}

<a id="license"></a>
## License 	🔑

${renderLicenseSection(data.license)}

<br>

<a id="faq"></a>
## FAQ 	❓

* What is your Github link?
  * [Github](https://github.com/${data.username})
* What is your email?
  * [Email](mailto:${data.email})
`
}

// export markdown function
module.exports = generateMarkdown;