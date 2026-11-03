
import { useProducts } from "../../Hooks/useProducts";
import { Card, CardContent, Container, Grid, Typography } from "@mui/material";

export default function Products() {
    const { products } = useProducts();
    return (
        <>
            <Header />
            <Container sx={{ my: 3}}>
                <Grid container spacing={4}>
                    {products.map((product) => {
                        return (
                            <Grid key={product._id} size={{ sm:6 , md:4 , lg:2}}>
                                <Card>
                                    <CardContent>
                                        <Typography>{product.name}</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        );
                    })}
                </Grid>
            </Container>
        </>
    );
}

