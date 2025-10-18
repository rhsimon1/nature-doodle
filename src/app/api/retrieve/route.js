export async function GET(request) {
  try {
    const { data, contentType } = await pinata.gateways.public.get(
      'bafkreiel7ujsqf6xozvgnau7xdx5he6mmuj2icwhodiynq23iqmbaugxmu'
    );
  } catch (e) {
    alert(`${e}`);
  }
}
