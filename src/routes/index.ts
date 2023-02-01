import mageRoute from './mage.route'
import generateMockRoutes from './mocks.route'

export default async function initRoutes() {
  const routes = [mageRoute]

  const mockRoutes = await generateMockRoutes()

  if (mockRoutes) routes.push(mockRoutes)

  return routes
}
