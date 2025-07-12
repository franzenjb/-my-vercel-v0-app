import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Code, Database, Globe, Zap, Brain, Map, BarChart3 } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Map className="h-8 w-8 text-red-600" />
              <h1 className="text-2xl font-bold text-gray-900">GIS Development Toolkit</h1>
            </div>
            <Badge variant="outline" className="text-red-600 border-red-600">
              Work in Progress
            </Badge>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Navigating the Modern GIS Development Landscape</h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            A comprehensive guide to the tools, libraries, and platforms that power contemporary geographic information
            systems development. From data processing to web deployment, this is both a reference and a roadmap for
            building robust GIS applications.
          </p>
          <div className="bg-red-50 border-l-4 border-red-600 p-6 text-left max-w-2xl mx-auto">
            <p className="text-gray-700 italic">
              "I am hanging on by a thread" - This documentation serves as both an explanation to others and a lifeline
              for myself, organizing the complex web of tools and technologies that make modern GIS development
              possible.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">The Development Ecosystem</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card>
              <CardHeader>
                <Database className="h-8 w-8 text-red-600 mb-2" />
                <CardTitle>Data & Analysis</CardTitle>
                <CardDescription>Spatial data processing, analysis, and visualization tools</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Badge variant="secondary">ArcGIS Online</Badge>
                  <Badge variant="secondary">Python GIS Libraries</Badge>
                  <Badge variant="secondary">Java Processing</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Code className="h-8 w-8 text-red-600 mb-2" />
                <CardTitle>Development Tools</CardTitle>
                <CardDescription>Code editors, AI assistants, and development environments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Badge variant="secondary">Cursor IDE</Badge>
                  <Badge variant="secondary">Claude Code</Badge>
                  <Badge variant="secondary">V0.dev</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Globe className="h-8 w-8 text-red-600 mb-2" />
                <CardTitle>Deployment & Hosting</CardTitle>
                <CardDescription>Version control, hosting platforms, and deployment solutions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Badge variant="secondary">GitHub</Badge>
                  <Badge variant="secondary">Vercel</Badge>
                  <Badge variant="secondary">PythonAnywhere</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Core Development Tools</h2>
          <div className="grid gap-8">
            {/* ArcGIS Online */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">ArcGIS Online with API and Python</CardTitle>
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://developers.arcgis.com/python/" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Documentation
                    </a>
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  The backbone of spatial data management and analysis. ArcGIS Online provides cloud-based GIS
                  capabilities while the Python API enables programmatic access to spatial data, analysis tools, and web
                  mapping services.
                </p>
                <div className="bg-gray-100 p-4 rounded-lg mb-4">
                  <code className="text-sm">
                    from arcgis.gis import GIS
                    <br />
                    gis = GIS("https://www.arcgis.com", "username", "password")
                    <br />
                    webmap = gis.map("San Francisco", zoomlevel=10)
                  </code>
                </div>
                <p className="text-sm text-gray-500">
                  Key capabilities: Spatial analysis, web mapping, data hosting, geocoding, routing
                </p>
              </CardContent>
            </Card>

            {/* Cursor */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">Cursor IDE</CardTitle>
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://cursor.sh/" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Official Site
                    </a>
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  An AI-powered code editor that understands context and provides intelligent suggestions. Built on VS
                  Code but enhanced with AI capabilities that make coding more efficient and less error-prone.
                </p>
                <p className="text-sm text-gray-500">
                  Key features: AI code completion, context-aware suggestions, integrated terminal, Git support
                </p>
              </CardContent>
            </Card>

            {/* Claude Code */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">Claude Code</CardTitle>
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://claude.ai/" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Claude AI
                    </a>
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Anthropic's AI assistant specialized in code generation, debugging, and explanation. Particularly
                  useful for complex GIS workflows and data processing tasks where understanding context is crucial.
                </p>
                <p className="text-sm text-gray-500">
                  Key capabilities: Code generation, debugging assistance, algorithm explanation, documentation
                </p>
              </CardContent>
            </Card>

            {/* GitHub */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">GitHub</CardTitle>
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Platform
                    </a>
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Version control and collaboration platform. Essential for tracking changes, managing code
                  repositories, and collaborating on GIS projects. Integrates seamlessly with deployment platforms.
                </p>
                <p className="text-sm text-gray-500">
                  Key features: Version control, issue tracking, project management, CI/CD integration
                </p>
              </CardContent>
            </Card>

            {/* Vercel */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">Vercel</CardTitle>
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://vercel.com/" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Platform
                    </a>
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Frontend deployment platform optimized for modern web frameworks. Perfect for deploying GIS web
                  applications, dashboards, and interactive maps with global CDN distribution.
                </p>
                <p className="text-sm text-gray-500">
                  Key features: Instant deployments, serverless functions, global CDN, GitHub integration
                </p>
              </CardContent>
            </Card>

            {/* V0.dev */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">V0.dev</CardTitle>
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://v0.dev/" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Platform
                    </a>
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Vercel's AI-powered UI generation tool. Transforms natural language descriptions into React components
                  and full applications. Particularly useful for rapidly prototyping GIS dashboards and user interfaces.
                </p>
                <p className="text-sm text-gray-500">
                  Key capabilities: AI UI generation, React components, rapid prototyping, Tailwind CSS
                </p>
              </CardContent>
            </Card>

            {/* PythonAnywhere */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">PythonAnywhere</CardTitle>
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://www.pythonanywhere.com/" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Platform
                    </a>
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Cloud-based Python development and hosting environment. Ideal for running GIS processing scripts, data
                  analysis workflows, and Python-based web applications without local infrastructure concerns.
                </p>
                <p className="text-sm text-gray-500">
                  Key features: Cloud Python environment, scheduled tasks, web app hosting, database support
                </p>
              </CardContent>
            </Card>

            {/* Java & JavaScript/Node */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Java & JavaScript/Node.js</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Java</h4>
                    <p className="text-gray-600 text-sm mb-2">
                      Enterprise-grade language for robust GIS applications, spatial databases, and complex geospatial
                      processing workflows.
                    </p>
                    <Button variant="outline" size="sm" asChild>
                      <a href="https://docs.oracle.com/en/java/" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Java Docs
                      </a>
                    </Button>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">JavaScript/Node.js</h4>
                    <p className="text-gray-600 text-sm mb-2">
                      Full-stack web development for interactive maps, real-time GIS applications, and modern web-based
                      spatial analysis tools.
                    </p>
                    <Button variant="outline" size="sm" asChild>
                      <a href="https://nodejs.org/en/docs/" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Node.js Docs
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Python GIS Libraries Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">15 Essential Python Libraries for GIS and Mapping</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Python libraries extend GIS functionality beyond traditional boundaries, enabling advanced spatial
              analysis, machine learning, and data science applications.
            </p>
          </div>

          {/* Core GIS Libraries */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Map className="h-6 w-6 text-red-600 mr-2" />
              Core GIS Libraries
            </h3>
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>1. ArcPy</CardTitle>
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href="https://pro.arcgis.com/en/pro-app/latest/arcpy/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Documentation
                      </a>
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Esri's Python library for geoprocessing operations, spatial analysis, data conversion, management,
                    and map production within the ArcGIS ecosystem.
                  </p>
                  <div className="bg-gray-100 p-4 rounded-lg mb-4">
                    <code className="text-sm">
                      import arcpy
                      <br />
                      arcpy.env.workspace = "C:/data"
                      <br />
                      arcpy.Buffer_analysis("roads.shp", "roads_buffered.shp", "100 METERS")
                    </code>
                  </div>
                  <Badge variant="secondary">Spatial Analysis</Badge>
                  <Badge variant="secondary">Data Management</Badge>
                  <Badge variant="secondary">Geoprocessing</Badge>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>2. GeoPandas</CardTitle>
                    <Button variant="outline" size="sm" asChild>
                      <a href="https://geopandas.org/" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Documentation
                      </a>
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Extends pandas to enable spatial operations on geometric types. Perfect for spatial data analysis
                    with the familiar pandas DataFrame interface.
                  </p>
                  <div className="bg-gray-100 p-4 rounded-lg mb-4">
                    <code className="text-sm">
                      import geopandas as gpd
                      <br />
                      gdf = gpd.read_file("cities.shp")
                      <br />
                      gdf.plot(column='population', cmap='viridis')
                    </code>
                  </div>
                  <Badge variant="secondary">Spatial DataFrames</Badge>
                  <Badge variant="secondary">Overlay Operations</Badge>
                  <Badge variant="secondary">Visualization</Badge>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>3. GDAL/OGR</CardTitle>
                    <Button variant="outline" size="sm" asChild>
                      <a href="https://gdal.org/" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Documentation
                      </a>
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    The universal translator for geospatial data formats. Supports 97 vector and 162 raster drivers,
                    used by virtually all GIS software for data translation.
                  </p>
                  <div className="bg-gray-100 p-4 rounded-lg mb-4">
                    <code className="text-sm">
                      from osgeo import gdal
                      <br />
                      dataset = gdal.Open("satellite_image.tif")
                      <br />
                      gdal.Translate("output.png", dataset, format="PNG")
                    </code>
                  </div>
                  <Badge variant="secondary">Format Translation</Badge>
                  <Badge variant="secondary">Raster Processing</Badge>
                  <Badge variant="secondary">Vector Operations</Badge>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>4. RSGISLib</CardTitle>
                    <Button variant="outline" size="sm" asChild>
                      <a href="https://www.rsgislib.org/" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Documentation
                      </a>
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Remote sensing tools for raster processing and analysis. Specializes in image classification,
                    filtering, and object-based segmentation (GEOBIA).
                  </p>
                  <div className="bg-gray-100 p-4 rounded-lg mb-4">
                    <code className="text-sm">
                      import rsgislib.segmentation
                      <br />
                      rsgislib.segmentation.shepherdseg("input.tif", "segments.tif", numClusters=100)
                    </code>
                  </div>
                  <Badge variant="secondary">Remote Sensing</Badge>
                  <Badge variant="secondary">Image Classification</Badge>
                  <Badge variant="secondary">GEOBIA</Badge>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>5. PyProj</CardTitle>
                    <Button variant="outline" size="sm" asChild>
                      <a href="https://pyproj4.github.io/pyproj/" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Documentation
                      </a>
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Handles spatial reference systems, coordinate transformations, and geodetic calculations. Essential
                    for working with different map projections and coordinate systems.
                  </p>
                  <div className="bg-gray-100 p-4 rounded-lg mb-4">
                    <code className="text-sm">
                      from pyproj import Transformer
                      <br />
                      transformer = Transformer.from_crs("EPSG:4326", "EPSG:3857")
                      <br />
                      x, y = transformer.transform(-74.0059, 40.7128)
                    </code>
                  </div>
                  <Badge variant="secondary">Projections</Badge>
                  <Badge variant="secondary">Coordinate Systems</Badge>
                  <Badge variant="secondary">Geodetic Calculations</Badge>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Data Science Libraries */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <BarChart3 className="h-6 w-6 text-red-600 mr-2" />
              Data Science Libraries
            </h3>
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>6. NumPy</CardTitle>
                    <Button variant="outline" size="sm" asChild>
                      <a href="https://numpy.org/" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Documentation
                      </a>
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Fundamental package for scientific computing. Provides structured arrays for fast numerical
                    operations on spatial data and attribute tables.
                  </p>
                  <div className="bg-gray-100 p-4 rounded-lg mb-4">
                    <code className="text-sm">
                      import numpy as np
                      <br />
                      elevation = np.array([[100, 120, 140], [110, 130, 150]])
                      <br />
                      slope = np.gradient(elevation)
                    </code>
                  </div>
                  <Badge variant="secondary">Numerical Computing</Badge>
                  <Badge variant="secondary">Array Operations</Badge>
                  <Badge variant="secondary">Mathematical Functions</Badge>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>7. Matplotlib</CardTitle>
                    <Button variant="outline" size="sm" asChild>
                      <a href="https://matplotlib.org/" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Documentation
                      </a>
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Comprehensive plotting library for creating static, animated, and interactive visualizations.
                    Essential for spatial data visualization and cartographic output.
                  </p>
                  <div className="bg-gray-100 p-4 rounded-lg mb-4">
                    <code className="text-sm">
                      import matplotlib.pyplot as plt
                      <br />
                      plt.scatter(x_coords, y_coords, c=values, cmap='viridis')
                      <br />
                      plt.colorbar(label='Temperature')
                    </code>
                  </div>
                  <Badge variant="secondary">Data Visualization</Badge>
                  <Badge variant="secondary">Cartography</Badge>
                  <Badge variant="secondary">Statistical Plots</Badge>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>8. Pandas</CardTitle>
                    <Button variant="outline" size="sm" asChild>
                      <a href="https://pandas.pydata.org/" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Documentation
                      </a>
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Data manipulation and analysis library. Provides high-performance data structures optimized for
                    handling large spatial datasets and attribute tables.
                  </p>
                  <div className="bg-gray-100 p-4 rounded-lg mb-4">
                    <code className="text-sm">
                      import pandas as pd
                      <br />
                      df = pd.read_csv("spatial_data.csv")
                      <br />
                      summary = df.groupby('region')['population'].sum()
                    </code>
                  </div>
                  <Badge variant="secondary">Data Wrangling</Badge>
                  <Badge variant="secondary">Big Data</Badge>
                  <Badge variant="secondary">Data Analysis</Badge>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>9. Re (Regular Expressions)</CardTitle>
                    <Button variant="outline" size="sm" asChild>
                      <a href="https://docs.python.org/3/library/re.html" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Documentation
                      </a>
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Pattern matching and text processing. Essential for cleaning spatial data, parsing coordinates, and
                    extracting information from unstructured text.
                  </p>
                  <div className="bg-gray-100 p-4 rounded-lg mb-4">
                    <code className="text-sm">
                      import re
                      <br />
                      coords = re.findall(r'-?\d+\.\d+', "Lat: 40.7128, Lon: -74.0059")
                      <br />
                      lat, lon = float(coords[0]), float(coords[1])
                    </code>
                  </div>
                  <Badge variant="secondary">Text Processing</Badge>
                  <Badge variant="secondary">Data Cleaning</Badge>
                  <Badge variant="secondary">Pattern Matching</Badge>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>15. Scikit-Learn</CardTitle>
                    <Button variant="outline" size="sm" asChild>
                      <a href="https://scikit-learn.org/" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Documentation
                      </a>
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Machine learning library for spatial data mining, classification, and predictive modeling.
                    Integrates with NumPy, SciPy, and Matplotlib for comprehensive analysis.
                  </p>
                  <div className="bg-gray-100 p-4 rounded-lg mb-4">
                    <code className="text-sm">
                      from sklearn.cluster import KMeans
                      <br />
                      kmeans = KMeans(n_clusters=5)
                      <br />
                      clusters = kmeans.fit_predict(spatial_features)
                    </code>
                  </div>
                  <Badge variant="secondary">Machine Learning</Badge>
                  <Badge variant="secondary">Classification</Badge>
                  <Badge variant="secondary">Clustering</Badge>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Visualization Libraries */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Globe className="h-6 w-6 text-red-600 mr-2" />
              Interactive Mapping Libraries
            </h3>
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>10. ipyleaflet</CardTitle>
                    <Button variant="outline" size="sm" asChild>
                      <a href="https://ipyleaflet.readthedocs.io/" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Documentation
                      </a>
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Interactive mapping in Jupyter notebooks. Combines Jupyter widgets with Leaflet for creating
                    interactive maps with custom controls and visualizations.
                  </p>
                  <div className="bg-gray-100 p-4 rounded-lg mb-4">
                    <code className="text-sm">
                      from ipyleaflet import Map, Marker
                      <br />m = Map(center=(40.7128, -74.0059), zoom=10)
                      <br />
                      marker = Marker(location=(40.7128, -74.0059))
                    </code>
                  </div>
                  <Badge variant="secondary">Jupyter Integration</Badge>
                  <Badge variant="secondary">Interactive Maps</Badge>
                  <Badge variant="secondary">Custom Widgets</Badge>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>12. Folium</CardTitle>
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href="https://python-visualization.github.io/folium/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Documentation
                      </a>
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Creates interactive web maps using Leaflet.js. Perfect for data visualization and creating shareable
                    maps with Python data processing capabilities.
                  </p>
                  <div className="bg-gray-100 p-4 rounded-lg mb-4">
                    <code className="text-sm">
                      import folium
                      <br />m = folium.Map(location=[40.7128, -74.0059])
                      <br />
                      folium.Marker([40.7128, -74.0059], popup='NYC').add_to(m)
                    </code>
                  </div>
                  <Badge variant="secondary">Web Maps</Badge>
                  <Badge variant="secondary">Data Visualization</Badge>
                  <Badge variant="secondary">Leaflet Integration</Badge>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>13. Geemap</CardTitle>
                    <Button variant="outline" size="sm" asChild>
                      <a href="https://geemap.org/" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Documentation
                      </a>
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Interactive mapping with Google Earth Engine. Designed for scientists and researchers to explore
                    multi-petabyte satellite imagery catalogs for remote sensing applications.
                  </p>
                  <div className="bg-gray-100 p-4 rounded-lg mb-4">
                    <code className="text-sm">
                      import geemap
                      <br />
                      Map = geemap.Map()
                      <br />
                      image = ee.Image('LANDSAT/LC08/C01/T1_SR/LC08_044034_20140318')
                    </code>
                  </div>
                  <Badge variant="secondary">Google Earth Engine</Badge>
                  <Badge variant="secondary">Satellite Imagery</Badge>
                  <Badge variant="secondary">Remote Sensing</Badge>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Specialized Libraries */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Zap className="h-6 w-6 text-red-600 mr-2" />
              Specialized Libraries
            </h3>
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>11. ReportLab</CardTitle>
                    <Button variant="outline" size="sm" asChild>
                      <a href="https://www.reportlab.com/" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Documentation
                      </a>
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    PDF generation and reporting toolkit. Addresses GIS reporting gaps by creating professional map
                    layouts, spatial analysis reports, and automated documentation.
                  </p>
                  <div className="bg-gray-100 p-4 rounded-lg mb-4">
                    <code className="text-sm">
                      from reportlab.pdfgen import canvas
                      <br />c = canvas.Canvas("map_report.pdf")
                      <br />
                      c.drawString(100, 750, "Spatial Analysis Report")
                    </code>
                  </div>
                  <Badge variant="secondary">PDF Generation</Badge>
                  <Badge variant="secondary">Report Templates</Badge>
                  <Badge variant="secondary">Map Layouts</Badge>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>14. LiDAR</CardTitle>
                    <Button variant="outline" size="sm" asChild>
                      <a href="https://github.com/giswqs/lidar" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        GitHub
                      </a>
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Specialized tools for processing and visualizing Light Detection and Ranging data. Includes
                    smoothing, filtering, and topological analysis of digital elevation models.
                  </p>
                  <div className="bg-gray-100 p-4 rounded-lg mb-4">
                    <code className="text-sm">
                      import lidar
                      <br />
                      dem = lidar.read_lidar("elevation.tif")
                      <br />
                      smoothed = lidar.median_filter(dem, size=3)
                    </code>
                  </div>
                  <Badge variant="secondary">LiDAR Processing</Badge>
                  <Badge variant="secondary">Terrain Analysis</Badge>
                  <Badge variant="secondary">DEM Operations</Badge>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Future Projects Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Future Project Directions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Brain className="h-5 w-5 text-red-600 mr-2" />
                  AI-Enhanced Spatial Analysis
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Integrating machine learning models with traditional GIS workflows for predictive spatial modeling and
                  automated feature extraction.
                </p>
                <div className="space-y-2">
                  <Badge variant="outline">Scikit-Learn Integration</Badge>
                  <Badge variant="outline">Automated Classification</Badge>
                  <Badge variant="outline">Predictive Modeling</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Globe className="h-5 w-5 text-red-600 mr-2" />
                  Real-time Spatial Dashboards
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Building interactive web applications that combine live data feeds with spatial analysis for real-time
                  decision making.
                </p>
                <div className="space-y-2">
                  <Badge variant="outline">Live Data Integration</Badge>
                  <Badge variant="outline">Interactive Visualization</Badge>
                  <Badge variant="outline">Real-time Analysis</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Database className="h-5 w-5 text-red-600 mr-2" />
                  Cloud-Native GIS Workflows
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Developing scalable spatial data processing pipelines using cloud platforms and serverless
                  architectures.
                </p>
                <div className="space-y-2">
                  <Badge variant="outline">Serverless Functions</Badge>
                  <Badge variant="outline">Scalable Processing</Badge>
                  <Badge variant="outline">Cloud Integration</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Code className="h-5 w-5 text-red-600 mr-2" />
                  Open Source Contributions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Contributing to the GIS open source community through library development, documentation, and
                  educational resources.
                </p>
                <div className="space-y-2">
                  <Badge variant="outline">Library Development</Badge>
                  <Badge variant="outline">Documentation</Badge>
                  <Badge variant="outline">Community Building</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-600 mb-4">
            This toolkit documentation is a living document, evolving with new technologies and methodologies in the GIS
            development landscape.
          </p>
          <div className="flex justify-center space-x-4">
            <Button variant="outline" size="sm" asChild>
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" />
                View on GitHub
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a href="https://vercel.com/" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" />
                Deploy on Vercel
              </a>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}
