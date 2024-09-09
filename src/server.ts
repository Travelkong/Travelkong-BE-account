async function startServer(server: any): Promise<void> {
    const port: string | number = process.env.PORT ?? 8080
    server.listen(port, () => console.log(`[server]: The server is running on port: ${port}`))
}

export default startServer