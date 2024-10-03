# Carbon Emissions & Fraud Monitoring Platform
<br/>
<div class="badges-gif">
  <p align="right">
    <img src="https://i.imgur.com/YOh3hiv.gif" width=100% align=center alt=TerraPulse-Demo>
    <br><br>
  </p>
</div>

<table>
  <tr>
    <th>Successful Report</th>
    <th>Detected Discrepancy</th>
  </tr>
  <tr>
    <td><img src="https://i.imgur.com/yZpajXO.jpeg" alt="Success" style="width:100%; "></td>
    <td><img src="https://i.imgur.com/Xp6m1qm.jpeg" alt="Discrepancy" style="width:100%;"></td>
  </tr>
</table>

# TerraPulse: Carbon Emissions Monitoring Platform

## Table of Contents

1. [Description](#description)
2. [Setup Instructions](#setup-instructions)
3. [How to use our platform](#how-to-use-our-platform)
6. [Known Issues](#known-issues)

## Description

The TerraPulse platform focuses on Monitoring and Reporting on Carbon Emissions by combining real-time satellite data from the Copernicus Sentinel-5P with transaction-based emission estimates from the Carbon Interface API. Our mission is to provide an integrated view of carbon footprints for governments, organizations, and individuals, helping them make data-driven decisions to reduce their carbon emissions and foster a more sustainable future.

By tackling the issue of fragmented and inaccessible emission data, TerraPulse aggregates data from these two critical sources, offering an easy-to-use platform to track emissions across various regions and understand their climate impact.

## Setup Instructions

1. **Clone the repository**:
   
   ```bash
   git clone https://github.com/your-repo/TerraPulse.git

2. **Install the required dependencies**:
   
   ```bash
   pip install -r requirements.txt

2. **Set up your API keys**:
   
   [Copernicus Sentinel-5P API](https://www.copernicus.eu/en)
   <br/>
   [Carbon Interface API](https://docs.carboninterface.com/#/)
   
## How to use our platform
```
 Dashboard: Access real-time carbon emission data from Copernicus Sentinel-5P and Carbon Interface API.
```
```
 Region Selection: Select regions on the map to view specific emissions data.
```
```
 Filter Data: Filter emissions by gas type (CO₂, SO₂, etc.).
```
```
 Export Reports: Generate and export reports for specific regions or gas types.
```
## Known Issues

**API Delays:** Occasional lags when retrieving data due to high traffic on the Carbon Interface API.
<br/>
**Compatibility:** New Python versions are under testing; older versions are recommended for stability.

